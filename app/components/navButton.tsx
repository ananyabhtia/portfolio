type NavButtonProps = {
  buttonText: string;
  onClick?: () => void;
};

export default function NavButton({ buttonText, onClick }: NavButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row border-2 border-white rounded-full justify-center items-center cursor-pointer"
    >
      <div>{buttonText}</div>
    </div>
  );
}
