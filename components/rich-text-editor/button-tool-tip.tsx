import Tooltip, { TooltipProps } from '@mui/material/Tooltip'

const ButtonToolTip = (props: TooltipProps): React.ReactElement => (
  <Tooltip placement='bottom' arrow disableFocusListener disableTouchListener {...props}>
    <span>
      {props.children}
    </span>
  </Tooltip>
)
export default ButtonToolTip