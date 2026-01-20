'use strict';

export function formattedDate(targetDate) {
 return new Date(targetDate).toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
   day: "2-digit"});
}