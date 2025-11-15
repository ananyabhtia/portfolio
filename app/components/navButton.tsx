type NavButtonProps = {
  buttonText: string;
  onClick?: () => void;
};

export default function NavButton({ buttonText, onClick }: NavButtonProps) {
  return (
    <div className="flex flex-row border-2 border-white rounded-full justify-center items-center">
      <div>{buttonText}</div>
    </div>
  );
}
