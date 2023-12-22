import { EVENTS } from '../public/JS/consts.js'

export function navigate (href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHTATE)
    window.dispatchEvent(navigationEvent)
  }

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
        
        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.crtlKey || event.shiftKey
        const isManagableEvent = target=== undefined || target === '_self'


        if(isMainEvent && isManagableEvent && !isModifiedEvent){
            navigate(to)
        }

        
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}