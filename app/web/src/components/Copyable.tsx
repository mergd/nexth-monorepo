import { CheckIcon, CopyIcon } from 'lucide-react'
// Pass in the copyToClipboard function
export default function Copyable(props: { isCopied: boolean; onCopy?: () => void }) {
  return (
    <div>
      {props.isCopied ? (
        <CheckIcon className='h-4 w-4' />
      ) : (
        <CopyIcon onClick={props.onCopy} className='hover: h-4 w-4 cursor-pointer' />
      )}
    </div>
  )
}
