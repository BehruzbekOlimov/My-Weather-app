const InputPane=({onClick,onChange,value})=>{
        return (
            <form className={'InputPane'}>
                <div className="col-9">
                    <input type="text" value={value} onSubmit={onClick} onChange={(e)=>onChange(e)} placeholder={'City Name'}/>
                </div>
                <div className="col-3">
                    <button onClick={onClick}>Search</button>
                </div>
            </form>
        );
}

export default InputPane;