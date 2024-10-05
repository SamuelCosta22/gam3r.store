import ListaProdutos from "@/components/produto/ListaProdutos";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-5 py-10 container">
      <ListaProdutos />
    </div>
  );
}
