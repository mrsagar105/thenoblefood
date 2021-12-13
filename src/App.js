import Router from "./routes/Router";

function App() {
  return (
    <>
<<<<<<< HEAD
      <Router />
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/serve" element={<Serve />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path={`/orderdetails`} element={<OrderDetails />} />
      </Routes>
>>>>>>> 61765242263c36fb4e0129e9e1c8c70455f07aa1
    </>
  );
}

export default App;

