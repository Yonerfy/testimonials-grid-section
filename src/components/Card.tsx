interface CardProps {
    image: string,
    name: string,
    title: string,
    review: string,
    rewiewTitle: string,
    backgroundColor: string,
    cardName: string,
    borderColor: string
}

export const Card = ({ image, name, title, review, rewiewTitle, backgroundColor, cardName, borderColor}:CardProps) => {
  return (
    <div className={`card ${cardName} rounded-lg p-[2em] drop-shadow-[0_40px_60px__rgba(72,85,106,0.35)]`} style={{backgroundColor: `${backgroundColor}`}}>
        <div className="card__header flex items-center">
            <img src={image} alt="profile" className="rounded-full w-[2.188em] h-[2.188em] border-2 mb-[1em]" style={{borderColor: `${borderColor}`}}/>
            <div className="ml-[1em] mb-[1em]">
                <h3 className="text-preset-2">{name}</h3>
                <p className="text-preset-4">{title}</p>
            </div>
        </div>
      
      <div className="card__content">
        <h3 className="text-preset-1 mb-[1em]">{rewiewTitle}</h3>
        <p className="text-preset-3">{review}</p>
      </div>
    </div>
  )
}