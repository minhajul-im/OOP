import { ButtonType } from "@/interface/auth";


const Button = ({ children, isSubmit, type }: ButtonType) => {
  return (
    <button
      type={type}
      disabled={isSubmit}
      className='w-full bg-black text-white p-4 rounded-lg border border-black font-medium'>
      {children}
    </button>
  );
};

export default Button;
