import './post.css'

function Posts() {

    return (
        <>
 <div className="feed">

    
    <ul className="nav nav-tabs justify-content-center" role="tablist">

        <li className="nav-item">
            <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#publicacoes"
                type="button"
            >
                Publicações
            </button>
        </li>

        <li className="nav-item">
            <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#reels"
                type="button"
            >
                Reels
            </button>
        </li>

        <li className="nav-item">
            <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#marcados"
                type="button"
            >
                Marcados
            </button>
        </li>

    </ul>

    
    <div className="tab-content">

        <div className="tab-pane fade show active" id="publicacoes">
            <div className="publicacoes">
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
                <img src="https://placehold.co/250x250" alt="" />
            </div>
        </div>

        <div className="tab-pane fade" id="reels">
            <h2>Seus Reels aparecerão aqui</h2>
        </div>

        <div className="tab-pane fade" id="marcados">
            <h2>Suas fotos marcadas aparecerão aqui</h2>
        </div>

    </div>

</div>  
        </>
        
    )
}

export default Posts