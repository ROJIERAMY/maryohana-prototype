/* Retain one semantic table; present rows as labelled cards on narrow screens. */
function labelMobileTables(root=document){
    root.querySelectorAll('table').forEach(table=>{
        if(table.closest('.calendar-grid')||table.classList.contains('calendar-table'))return;
        const headers=Array.from(table.querySelectorAll('thead th')).map(th=>th.textContent.trim());
        if(!headers.length)return;
        table.classList.add('responsive-records');
        table.querySelectorAll('tbody tr').forEach(row=>{
            Array.from(row.children).forEach((cell,i)=>{
                if(cell.colSpan>1){cell.classList.add('record-empty');return;}
                const label=headers[i]||'الإجراءات';
                if(cell.dataset.label!==label)cell.dataset.label=label;
            });
        });
    });
}
labelMobileTables();
new MutationObserver(()=>labelMobileTables()).observe(document.body,{childList:true,subtree:true});

function mobileNavigation(){
 document.querySelectorAll('.member-nav,.member-tabs').forEach(nav=>{
  if(nav.nextElementSibling?.classList.contains('mobile-section-menu'))return;
  const menu=document.createElement('details');menu.className='mobile-section-menu';
  const summary=document.createElement('summary');summary.textContent='كل الأقسام والأدوات';menu.append(summary);
  const links=document.createElement('div');for(const link of nav.querySelectorAll('a'))links.append(link.cloneNode(true));menu.append(links);nav.after(menu);
 });
 document.querySelectorAll('.demo-bar').forEach(bar=>{
  if(bar.querySelector('.demo-controls'))return;
  const details=document.createElement('details');details.className='demo-controls';const summary=document.createElement('summary');summary.textContent='تغيير الدور والفريق';details.append(summary);
  const panel=document.createElement('div');panel.className='demo-controls-panel';for(const child of Array.from(bar.children).slice(1))panel.append(child);details.append(panel);bar.append(details);
  const media=matchMedia('(max-width:720px)');details.open=!media.matches;media.addEventListener('change',e=>details.open=!e.matches);
 });
}
mobileNavigation();new MutationObserver(mobileNavigation).observe(document.body,{childList:true,subtree:true});
