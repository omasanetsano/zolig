import {contentRecords} from '@/lib/content';
import {CategoryAccordion} from '@/components/category-accordion';
export async function SupplyCategories(){const records=await contentRecords('categories');return <CategoryAccordion items={records.map(r=>[r.title,r.excerpt+' '+r.body])}/>}
export async function ProductCatalogue(){const records=await contentRecords('products');return <div className="product-grid">{records.map(r=><article key={r.id}>{r.image&&<img src={r.image} alt={r.title+' — catalogue image'} loading="lazy"/>}<h3>{r.title}</h3><p>{r.excerpt}</p><p>{r.body}</p><a className="text-link" href={'/contact-us?category='+encodeURIComponent(r.title)}>Enquire</a></article>)}</div>}
