import React, { FC } from 'react'
export const Button: FC<{
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}> = ({ text, onClick }): JSX.Element => {
  return (
    <>
      <button
        className="py-1 px-4 rounded-md bg-askbuddie-red text-base text-white"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}
