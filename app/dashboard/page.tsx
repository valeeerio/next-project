import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  return (
    <main className="flex h-full">
      <div className="flex w-full bg-grigio p-3">
        <div className="w-1/4 py-6 pl-8">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
        <div className="flex-1 py-6 pl-8">
          <div className="flex justify-around h-3/6">
            <div className="w-1/2 pb-2 px-5">
              <Skeleton className="h-full w-full rounded-xl" />
            </div>
            <div className="w-1/2 pb-2 pr-8">
              <Skeleton className="h-full w-full rounded-xl" />
            </div>
          </div>
          <div className="flex justify-around h-3/6">
            <div className="w-1/2 pt-2 px-5">
              <Skeleton className="h-full w-full rounded-xl" />
            </div>
            <div className="w-1/2 pt-2 pr-8">
              <Skeleton className="h-full w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

//SENZA BORDI DELLA PAGINA DI LOGIN
//
// <main className="flex h-full">
//   <div className="flex flex-1 justify-between bg-white border-62 border solid border-grigio">
//     <div className="flex w-full bg-grigio">
//       <div className="w-1/4">
//         <Skeleton className="h-full w-full rounded-xl" />
//       </div>
//       <div className="flex-1">
//         <div className="flex justify-around h-3/6">
//           <div className="w-1/2 pb-2 px-5">
//             <Skeleton className="h-full w-full rounded-xl" />
//           </div>
//           <div className="w-1/2 pb-2">
//             <Skeleton className="h-full w-full rounded-xl" />
//           </div>
//         </div>
//         <div className="flex justify-around h-3/6">
//           <div className="w-1/2 pt-2 px-5">
//             <Skeleton className="h-full w-full rounded-xl" />
//           </div>
//           <div className="w-1/2 pt-2">
//             <Skeleton className="h-full w-full rounded-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </main>
