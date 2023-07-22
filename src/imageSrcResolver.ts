const imageSrcResolver = ({ src, width }: { src: string; width: number }) => {
  return `${src}${src.includes('?') ? '&' : '?'}w=${width}`
}

export default imageSrcResolver