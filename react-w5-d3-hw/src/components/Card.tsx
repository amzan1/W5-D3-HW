interface icard{
    src:string,
    supject:string,
    type1:string,
    type2:string,
    type3:string,
    type4:string,

}

function Card(props:icard) {
  return (
    <>
        <div className="w-80 flex   border-solid border-2 border-gray-600 ms-11 max-sm:my-3">
            <div>
            <img className=" w-32  " src={props.src} alt="" />
            </div>
            <div className="flex flex-col justify-center mx-8 h-40 ">
                <h3 className=" font-bold text-lg mx-4">{props.supject}</h3>
                <p className=" tracking-wider mx-4">{props.type1}</p>
                <p className=" tracking-wider mx-4">{props.type2}</p>
                <p className=" tracking-wider mx-4">{props.type3}</p>
                <p className=" tracking-wider mx-4">{props.type4}</p>

            </div>
        </div>
    </>
  )
}

export default Card