interface ItemsButtonProps {
  img: string;
  name: string;
  href?: string;
}

const ItemsButton: React.FC<ItemsButtonProps> = ({ img, name, href }) => {
  return (
    <a href={href} target="_blank" className="items-button flex gap-1 text-xl">
      <img src={img} width={"20px"} alt={name} />
      {name}
    </a>
  );
};

export default ItemsButton;
