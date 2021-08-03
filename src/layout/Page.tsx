import Footer from './Footer'

type PageProps = React.PropsWithChildren<any>
  & {
    className?: string
  }

function Page(props: PageProps): JSX.Element {
  const { children, className, ...rest } = props 
  return (
    <div className={className} {...rest}>
      {children}
      <Footer>
        Lindell, Bitch!
      </Footer>
    </div>
  )
}

export default Page