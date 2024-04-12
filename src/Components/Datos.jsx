import { useSelector } from 'react-redux';

export function Datos() {
    const user = useSelector((state) => state.user);
    return (
      <>
        <h1>Datos de usuario</h1>
        <ul>
          <li>Nombre: {user.name}</li>
          <li>Nombre de usuario: {user.login}</li>
          <li>Seguidores: {user.followers}</li>
          <li>repositoriosPublicos: {user.public_repos}</li>
          <img src={user.avatar_url} alt={user.name} />
        </ul>
      </>
    );
    }