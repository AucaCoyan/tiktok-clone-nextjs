export default function Navlink(prop: { title: string, destination: string }) {
  return (
    <a 
    className="text-white bg-deepblue"
    href={prop.destination}>{prop.title}</a>
  )
}