import { PricingItem } from "./types"

const Main = (item: PricingItem) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card pricing-card h-100">
                <div className="card-body text-center px-5 py-4">
                    <p className="h5 mb-5">
                        <span className="h1 text-dark">{item.name}</span>
                    </p>
                    <hr />
                    <p className="mb-0">
                        <span className="h1">${item.monthly}</span>/month
                    </p>
                    <p className="mb-5">
                        <span className="h5 small text-success">${item.yearly}/year ({item.discount}% off)</span>
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                        {item.details.map( i => (
                            <li key={i.id} className="list-group-item font-weight-light border-top-0">{i.text}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-sm btn-primary">Coming soon</button>
                </div>
            </div>
        </div>
    )
}

export default Main