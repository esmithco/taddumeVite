import './SignUp.css'

function SignUp() {
  return (
    <>
      <div className='login'>
        <div className='form-container'>

          <h1 className='title'>Crear una cuenta</h1>

          <form action='/' className='form'>

            <div>

              <label htmlFor='name'>Nombre</label>
              <input type='text' id='name' placeholder='TADDUME' className='input input-name' />

              <label htmlFor='new-email'>Correo</label>
              <input type='text' id='new-email' placeholder='taddume@correo.com' className='input input-email' />

              <label htmlFor='new-password'>Contraseña</label>
              <input type='password' id='new-password' placeholder='*********' className='input input-password' />


            </div>

            <input type='submit' value='Crear' className='primary-button login-button' />

          </form>

        </div>
      </div>
    </>
  );
}

export { SignUp }