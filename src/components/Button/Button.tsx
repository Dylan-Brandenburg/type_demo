import React from 'react';

type Props = {
  action?: () => void;
  children?: JSX.Element | JSX.Element[] | string | string[];
};

export default function Button({ action, children }: Props) {
  return (
    <div
      onClick={action}
      className="text-xl inline-block px-12 py-4 mt-24 text-black rounded-full ring-expand bg-gradient-to-br from-[#4dcaff] via-[#9480ff] to-[#bd34fe]"
    >
      {children}
    </div>
  );
}
