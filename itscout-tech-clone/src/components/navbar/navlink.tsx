export default function Navlink(prop: { title: string, destination: string }) {
  return (
    <a 
    className="text-white bg-slate-700"
    href={prop.destination}>{prop.title}</a>
  )
}