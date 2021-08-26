import * as React from 'react'

import { DrawerContext, DrawerActions, DrawerProps } from '@components'

const Drawer: React.FC<DrawerProps> = ({ open, children, ...settings }) => {
  const _drawer: DrawerActions = React.useContext(DrawerContext)

  /**
   * Trigger the effect always when the `open` state of the drawer undergo a change
   */
  React.useEffect(() => {
    if (_drawer) {
      if (open) {
        // always when the drawer will be opened, is necessary to update it content,
        // to ensure that the correct content is displayed
        _drawer?.setContent(children, settings)
        _drawer?.show()
      } else {
        _drawer?.close()
      }
    } else {
      console.warn(
        'None of `Drawer Context` was found. Please, remember to add a `DrawerConsumer` at your application.'
      )
    }
  }, [open, children])

  return null
}

Drawer.defaultProps = {
  open: false,
  overlayOpacity: 0.01,
  backgroundColor: 'black',
  backgroundColorShade: 'light',
  closeByOverlay: true,
}

export { Drawer }
