// import React, { useState, useRef, useEffect } from "react";
// import "./DropdownMenu.css";

// const DropdownMenu = () => {
//   const [open, setOpen] = useState(true);
//   const [selected, setSelected] = useState([]);
//   const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
//   const selectAllRef = useRef(null);

//   const togglePage = (page) => {
//     setSelected((prev) =>
//       prev.includes(page)
//         ? prev.filter((p) => p !== page)
//         : [...prev, page]
//     );
//   };

//   const allSelected = selected.length === pages.length;
//   const someSelected = selected.length > 0 && selected.length < pages.length;
  
//   // Calculate percentage for gradient effect
//   const selectedPercentage = selected.length / pages.length;

//   const handleSelectAll = () => {
//     if (allSelected) setSelected([]);
//     else setSelected(pages);
//   };

//   // Set indeterminate state for "All pages" checkbox
//   useEffect(() => {
//     if (selectAllRef.current) {
//       selectAllRef.current.indeterminate = someSelected;
//     }
//   }, [someSelected]);

//   // Get checkbox color based on percentage
//   const getCheckboxColor = () => {
//     if (selected.length === 0) return "#e5e7eb";
//     if (selected.length === 1) return "#93c5fd"; // light blue
//     if (selected.length === 2) return "#60a5fa"; // medium blue
//     if (selected.length === 3) return "#3b82f6"; // darker blue
//     return "#2563eb"; // darkest blue
//   };

//   return (
   
//       <div className="dropdown-container">
//         <div className="dropdown-list">
//           <label 
//             className="checkbox-item all-pages-item"
//             onClick={(e) => {
//               e.preventDefault();
//               setOpen(!open);
//             }}
//           >
            
//             <input
//               ref={selectAllRef}
//               type="checkbox"
//               checked={allSelected}
//               onChange={handleSelectAll}
//               onClick={(e) => e.stopPropagation()}
//               style={{
//                 accentColor: getCheckboxColor()
//               }}
//             />
//             <span>All pages</span>
//           </label>

//           {open && (
//             <>
//               <div className="divider"></div>

//               {pages.map((page) => (
//                 <label key={page} className="checkbox-item">
//                   <input
//                     type="checkbox"
                    
//                     checked={selected.includes(page)}
//                     onChange={() => togglePage(page)}
//                   />
//                   <span>{page}</span>
//                 </label>
//               ))}

//               <div className="divider"></div>

//               <button className="done-btn" onClick={() => setOpen(false)}>
//                 Done
//               </button>
//             </>
//           )}
//         </div>
//       </div>
   
//   );
// };

// export default DropdownMenu;


import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const selectAllRef = useRef(null);

  const togglePage = (page) => {
    setSelected((prev) =>
      prev.includes(page)
        ? prev.filter((p) => p !== page)
        : [...prev, page]
    );
  };

  const allSelected = selected.length === pages.length;
  const someSelected = selected.length > 0 && selected.length < pages.length;
  


  const handleSelectAll = () => {
    if (allSelected) setSelected([]);
    else setSelected(pages);
  };

  // Set indeterminate state for "All pages" checkbox
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someSelected;
    }
  }, [someSelected]);

  // Get checkbox color based on percentage
  const getCheckboxColor = () => {
    if (selected.length === 0) return "#CDCDCD"; // Gray - 0%
    if (selected.length === 1) return "#A8C5F5"; // Light blue - 25%
    if (selected.length === 2) return "#6B9EF0"; // Medium blue - 50%
    if (selected.length === 3) return "#4685EC"; // Darker blue - 75%
    return "#2469F6"; // Darkest blue - 100%
  };

  return (
    <div className="page-container">
      <div className="dropdown-container">
        <div className="dropdown-list">
          <label 
            className="checkbox-item all-pages-item"
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          >
            <input
              ref={selectAllRef}
              type="checkbox"
              checked={allSelected}
              onChange={handleSelectAll}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: (allSelected || someSelected) ? getCheckboxColor() : '#fff',
                borderColor: (allSelected || someSelected) ? getCheckboxColor() : '#d1d5db'
              }}
            />
            <span>All pages</span>
          </label>

          {open && (
            <>
              <div className="divider"></div>

              {pages.map((page) => (
                <label key={page} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selected.includes(page)}
                    onChange={() => togglePage(page)}
                  />
                  <span>{page}</span>
                </label>
              ))}

              <div className="divider"></div>

              <button className="done-btn" onClick={() => setOpen(false)}>
                Done
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;