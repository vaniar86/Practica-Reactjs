import React from 'react';

const ExercisesForm = ({onChange, onSubmit, form}) => {
    return(
        <div className="container">
                <form onSubmit={onSubmit} className="mt-5"> 
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="title" 
                            placeholder="Ingrese titulo"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                         <input 
                            type="text" 
                            className="form-control" 
                            name="description" 
                            placeholder="Ingrese descripcion"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="img" 
                            placeholder="Ingrese Imagen"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-group">
                    <input 
                            type="text" 
                            className="form-control" 
                            name="rightColor" 
                            placeholder="Ingrese rightColor"
                            onChange={onChange}
                            value={form.rightColor}
                        />
                    </div>
                    <div className="form-group">
                    <input 
                            type="text" 
                            className="form-control" 
                            name="leftColor" 
                            placeholder="Ingrese leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                        />
                    </div>
                    <button 
                        className="btn btn-primary"
                        type="submit">
                            Enviar
                        </button>

                </form>
            </div>
    )

}

export default  ExercisesForm 
        