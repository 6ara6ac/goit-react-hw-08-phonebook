import { selectFilter } from "redux/contacts/selectors"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "redux/contacts/filterSlice"
import { FilterStyled, Input } from "./Filter.styled"
import { TextField } from '@mui/material'


export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  
  const handleFilterChange = ({currentTarget: {value}}) => {
    dispatch(changeFilter(value))
  }
 

  return <FilterStyled>
  <Input as={TextField} label='filter' type="text" name="filter" value={filter} onChange={handleFilterChange} sx={{width:'100%', marginBottom:'30px'}}/>
  </FilterStyled>
}