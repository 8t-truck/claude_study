//각 엔드포인트에서 실행할 함수가 정의되어있는 것이 컨트롤러

export async function health(req, res){
    return res.status(200).end();
}

export async function getVariable(req, res){
    const variable = process.env.TEST_VAR || "no variable";

    return res.status(200).json({
        variable,
    });
}