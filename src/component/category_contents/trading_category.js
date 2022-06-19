const trading_category = [
    {
        content : "경기도",
        value : "gyeongGiDo",
        path : "gyeonggido",
        next_category : [
            {
                content : "가평",
                value : "gaPeyong",
                path : "gapyeong",
                next_category : [
                    {
                        content : "가평군",
                        value : "gaPeyongGun",
                        path : "gapyeonggun",
                    },
                    {
                        content : "청평면",
                        value : "cheongPyeongMyeon",
                        path : "cheongpyeongmyeon",
                    }
                ]
            }
        ]
    }
]

export default trading_category;