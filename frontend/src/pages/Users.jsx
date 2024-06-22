import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePersonsContext } from "../hooks/usePersonsContext";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;
const TableHeader = styled.th`
  padding: 10px;
`;
const TableCell = styled.td`
  padding: 10px;
`;

const TableBtn = styled.button`
  background-color: var(--color-brand-600);
  margin-right: 10px;
  color: var(--color-grey-50);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-brand-800);
  }
`;
function Users() {
  const { persons, dispatch } = usePersonsContext();
  const { user } = useAuthContext();
  console.log("context", usePersonsContext());
  //get All users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await res.json();

        if (res.ok) {
          dispatch({ type: "SET_PERSONS", payload: data });
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      fetchUsers();
    }
  }, [dispatch, user]);

  console.log(persons);
  return (
    <div>
      <h1>Users</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>name</TableHeader>
            <TableHeader>fonction</TableHeader>
            <TableHeader>gamme</TableHeader>
            <TableHeader>city</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {persons.map((person) => (
            <TableRow key={person._id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.fonction}</TableCell>
              <TableCell>{person.gamme}</TableCell>
              <TableCell>{person.city}</TableCell>
              <TableCell>
                <TableBtn>edit</TableBtn>
                <TableBtn>delete</TableBtn>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
