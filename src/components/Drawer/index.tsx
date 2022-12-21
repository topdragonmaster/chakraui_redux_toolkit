import React from 'react'
import {
  Button,
  Stack,
  Drawer as DrawerUI,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Checkbox,
} from '@chakra-ui/react'
import { GENRE_LIST } from '../../const'

type Props = {
  isOpen: boolean
  selectedOptions: string[]
  onChangeOption: (checked: boolean, option: string) => void
  onClose: () => void
  onSave: () => void
}

const Drawer: React.FC<Props> = ({
  isOpen,
  selectedOptions,
  onClose,
  onChangeOption,
  onSave,
}) => {
  const handleChangeOption =
    (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeOption(e.target.checked, option)
    }

  return (
    <DrawerUI isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent background="black" fontFamily="cursive" color="white">
        <DrawerHeader fontSize="30px">Genre Lists</DrawerHeader>
        <DrawerBody>
          <Stack mt={1} spacing={1}>
            {GENRE_LIST.map((genre) => (
              <Checkbox
                key={genre}
                isChecked={selectedOptions.indexOf(genre) > -1}
                spacing="10px"
                size="lg"
                colorScheme="#c0421c"
                onChange={handleChangeOption(genre)}
              >
                {genre}
              </Checkbox>
            ))}
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Button
            variant="outline"
            mr={3}
            onClick={onClose}
            _hover={{ background: '#c0421c' }}
          >
            Cancel
          </Button>
          <Button
            background="#c0421c"
            colorScheme="blue"
            border="1px solid #c0421c"
            onClick={onSave}
            _hover={{ background: 'black' }}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerUI>
  )
}

export default Drawer
