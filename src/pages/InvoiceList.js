import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices, QueryNavLink } from "./invoicedata";

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />

                {invoices
                    .filter(invoice => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map(invoice => (
                        <QueryNavLink
                            style={{ display: "block", margin: "1rem 0" }}
                            to={`${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </QueryNavLink>
                    ))}
            </nav>

            <Outlet />
        </div>
    );
}