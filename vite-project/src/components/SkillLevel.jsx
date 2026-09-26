import { createContext, useContext } from "react"

const SkillContext = createContext()

export default function SkillLevel ({children, ...props}) {
  const { value, onChange } = useContext(SkillContext)

  const isSelected = value == props.value

  const handleClick = (e) => {
    if (isSelected) {
      e.preventDefault()
      onChange({ target: { value: "" } })
    }
  }

  return (
    <label
     name="level"
      onClick={handleClick}
      className={`px-5 py-4 rounded-2xl cursor-pointer border-2 hover:bg-black hover:text-white transition-all ${
        value == props.value
          ? "bg-black text-white"
          : "bg-white text-black border-gray-500"
      }`}
    >
      <input
        type="radio"
        name="level"
        className="hidden"
        checked={value == props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  );
}

export function SkillGroup({ value, onChange, children}) {
 return(
   <SkillContext.Provider value={{ value, onChange}}> {children} </SkillContext.Provider>
 )
}