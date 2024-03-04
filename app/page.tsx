import Image from "next/image";

export default function Home() {
  return (
    <div className='max-w-7xl overflow-hidden rounded-xl p-4 lg:p-8 text-slate-700'>
      <div className='bg-slate-100 rounded-xl shadow p-4 border-4 border-t-8 border-transparent mt-20'>
        <h1 className="text-slate-500 text-xl mb-4 mt-4 text-center">
          Next로 만든 퀴즈
        </h1>
      </div>
      <div className='bg-slate-100 rounded-xl shadow p-4 border-4 border-t-8 border-transparent mt-20'>
        <h2 className="text-slate-500 text-lg font-medium  mb-4 mt-4 text-center">
          Question 2문제 + State 선택(math or alphabet) 2문제를 풀어보세요!
        </h2>
      </div>
      <div className='bg-slate-100 rounded-xl shadow p-4 border-4 border-t-8 border-transparent mt-20'>
        <h2 className="text-slate-500 text-lg font-medium  mb-4 mt-4 text-center">
          학습 후 Quiz를 통과해보세요!
        </h2>
      </div>
    </div>
  );
}
