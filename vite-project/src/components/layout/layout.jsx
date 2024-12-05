export const Layout = ({children}) => {
    return (
        <div>
            <header style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px", backgroundColor: "#f8f9fa" }}>Header</header>
            {children}
            <footer style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px", backgroundColor: "#f8f9fa" }}>Footer</footer>
        </div>
    );
}