


const HorizontalScrollCard = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="snap-start flex-[0_0_100%]">
            {children}
        </div>
    )
}

export default HorizontalScrollCard;