import { useState } from "react";

function Register() {
  let isFormValid = true;
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    status: "",
    password: ""
  });
    
  const formValidation = () => {
    
    if(formData.nom.trim() === '') {
      setErrors(prevState => {
        return [...prevState, "Nom obligatoire !!"]
      });
      isFormValid = false
    }

    if(formData.email.trim() === '' || !formData.email.match(/^\S+@\S+\.\S+$/)) {
      setErrors(prevState => {
        return [...prevState, "email obligatoire ou format invalid !!"]
      });
      isFormValid = false
    }

    if(formData.prenom.trim() === '') {
      setErrors(prevState => {
        return [...prevState, "Prenom obligatoire !!"]
      });
      isFormValid = false
    }

    if(formData.status.trim() === '') {
      setErrors(prevState => {
        return [...prevState, "Status obligatoire !!"]
      });
      isFormValid = false
    }

    if(formData.password.trim() === '') {
      setErrors(prevState => {
        return [...prevState, "Mot de pass obligatoire !!"]
      });
      isFormValid = false
    }   
    
    return isFormValid;
  }

  const handleChange = (e) => {
    isFormValid ?
     setFormData({
      ...formData,
      [e.target.name]: e.target.value
    }) : "Vueillez remplir tous les champs !!"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    formValidation();
    console.log(formData)
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center">Register</h2>
        {errors.length > 0
          ?
            <div className="alert alert-danger" role="alert">
              <strong>Error</strong>
              <ul>
                {errors.map((e, key) => (
                  <li key={key}>{e}</li>
                ))}
              </ul>
            </div>
          :
            ""
        }
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Prenom</label>
            <input
              type="text"
              className="form-control"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
              <option value="">--- Choisir Votre Status ---</option>
              <option value="client" name="client">Client</option>
              <option value="artisan" name="artisan">Artisan</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Envoyer
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;