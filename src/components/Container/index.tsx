export default function Container(
    props: {data: ICurrentProps[]}
) {
    if(!props.data?.length) {
        return(
            <div>
                <h1>No users found</h1>
            </div>
        )
    }

    return(
        <>
            {
                props.data && props.data.map(({
                    date, 
                    dscovr_j2000_position,
                    caption
                }: ICurrentProps, index: number) => {
                    return (
                        <div key={index} style={{margin: '15px'}}>
                            <div>{date}</div>
                            <div>{caption}</div>
                        </div>
                    )
                })
            }
        
        
        </>
    )
}