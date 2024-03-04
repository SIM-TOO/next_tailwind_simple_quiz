// 객체의 형태를 정의(interface)
interface IOption {
    id: number;
    text: string;
}

// 유형을 정의하는 열거형(enum)
enum QuestionTypes {
    CHECK_BOX,
    RADIO_BOX
}

// export 키워드로 외부에서도 접근 가능
export interface IQuestion {
    id: number;
    text: string;
    options: IOption[];
    answer: number;
    img: boolean;
    type: QuestionTypes;
}

export interface IState {
    id: number;
    title: string;
    questions: IQuestion[];
}