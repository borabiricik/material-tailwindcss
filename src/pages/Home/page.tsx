import { Option, Select } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"

interface Brand {
  value: string
  label: string
  id: string
  onClick?: () => void
}

const brands: Brand[] = [
  { value: "1", label: "Option 1", id: "100" },
  { value: "2", label: "Option 2", id: "200" },
  { value: "3", label: "Option 3", id: "300" },
]

const HomePage = () => {
  const navigate = useNavigate()
  const navigateOption: Brand = {
    id: "400",
    label: "Add Brand",
    value: "4",
    onClick: () => navigate("/add-brand"),
  }
  const myOptions: Brand[] = [navigateOption, ...brands]
  return (
    <Select label="Brand" name="brandId" placeholder={"Select"}>
      {myOptions.map((option) => (
        <Option key={option.id} value={option.id} onClick={option.onClick}>
          {option.label}
        </Option>
      ))}
    </Select>
  )
}

export default HomePage
