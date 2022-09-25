import React from 'react'
import Wrapper from '../components/shared/wrapper/Wrapper';
import ItemBlock from '../components/blocks/itemBlock/ItemBlock';
import ModalOrder from '../components/shared/modals/modalOrder/ModalOrder';

const Home = () => {
  const [modalActive, setModalActive] = React.useState(false)
  const [itemCardModalActive, setItemCardModalActive] = React.useState(false)


  return (
    <>
      <ItemBlock 
      itemCardModalActive={itemCardModalActive} 
      setItemCardModalActive={setItemCardModalActive} 
      setModalActive={setModalActive} 
      />
      <ModalOrder
      active={modalActive} 
      setActive={setModalActive}
      />
    </>
  )
}
export default Home