import React from 'react';

const Register = () => {
  return (
    <div>
      <div className='row'>
        <div>
          <form action="">
            <div>
              <label htmlFor="">Nombre</label>
              <input type="text" placeholder='nombre' />
            </div>
            <div>
              <label htmlFor="">Correo</label>
              <input type="email" placeholder='escriba su correo' />
            </div>
            <div>
              <label htmlFor="">Deje su Comentario</label>
              <textarea name="" id=""  rows="4"></textarea>
            </div>
            <button type='submit'></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;