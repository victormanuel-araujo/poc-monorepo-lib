import { MaterialIcon } from './material'
import { Playlist } from './playlist'
import { StackIcon } from './stack'

interface IconComponent extends React.FC {
  Material: typeof MaterialIcon
  Playlist: typeof Playlist
  Stack: typeof StackIcon
}

export const Icon: IconComponent = () => {
  throw new Error('Not implemented (yet)')
}

Icon.Material = MaterialIcon
Icon.Playlist = Playlist
Icon.Stack = StackIcon
