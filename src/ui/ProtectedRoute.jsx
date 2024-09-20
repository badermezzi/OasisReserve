import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flax;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return children;
}

export default ProtectedRoute;
