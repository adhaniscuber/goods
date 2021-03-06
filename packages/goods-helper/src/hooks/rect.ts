import { useEffect, useRef, useState } from 'react'

interface RectHookReturn<T extends HTMLElement> {
  ref: React.RefObject<T>
  rect: DOMRect
}

/**
 * Hook to record DOMRect of an element
 * @param [deps] array of dependencies. If one item changed, the
 * DOMRect will be updated
 * @default []
 */
export function useRect<T extends HTMLElement = HTMLElement>(
  deps: unknown[] = []
): RectHookReturn<T> {
  const ref = useRef<T>(null)
  const [rect, setRect] = useState(new DOMRect())

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [ref, ...deps])

  return { ref, rect }
}
