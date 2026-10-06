"use client";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
export function CategoryAccordion({items}:{items:string[][]}){return <Accordion type="single" collapsible className="category-accordion">{items.map(([title,body],i)=><AccordionItem key={title} value={String(i)}><AccordionTrigger>{title}</AccordionTrigger><AccordionContent>{body}</AccordionContent></AccordionItem>)}</Accordion>}
