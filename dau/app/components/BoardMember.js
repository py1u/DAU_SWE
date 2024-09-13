const BoardMember = ({name, position}) => {
    return(
        <div className="mx-20 my-8">
            <div className="w-64 h-64 bg-white rounded-2xl shadow-button-shadow"></div>
            <p className="text-[#431D01] text-4xl font-semibold p-1 mt-4">{name}</p>
            <p className="text-[#431D01] text-4xl p-1">{position}</p>
        </div>
    )
}

export default BoardMember;