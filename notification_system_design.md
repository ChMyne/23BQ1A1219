# Stage 1

## Priority Logic

Placement notifications have highest priority.
Result notifications have medium priority.
Event notifications have lowest priority.

## Weights

Placement = 3
Result = 2
Event = 1

## Ranking Formula

Priority Score =
Weight × Large Constant + Timestamp

Notifications are sorted in descending order of score.

## Efficient Maintenance

A Min Heap of size 10 can be used to continuously maintain the top 10 notifications as new notifications arrive.

Time Complexity:
O(n log 10)