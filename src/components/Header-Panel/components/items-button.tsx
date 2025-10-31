interface ItemsButtonProps {
  img: string;
  name: string;
  href?: string;
}

const ItemsButton: React.FC<ItemsButtonProps> = ({ img, name, href }) => {
  return (
    <span className="links-button cursor-pointer">
      <a
        href={href}
        target="_blank"
        className="links-button flex gap-1 text-xl "
      >
        <img src={img} width={"20px"} alt={name} />
        {name}
      </a>
    </span>
  );
};

export default ItemsButton;
