n = gets.to_i
points = []
octogons = []
current_octogon = 0
Point = Struct.new(:x,:y)
for i in 0..(n - 1)
    line = gets
    if not line.nil?
        line = line.split(",")
        points << Point.new(line[0].to_f, line[1].to_f)
    end
end

points.sort! { |a,b| a.x <=> b.x }
last = points[7]
current_high = points.first 
current_low = points.first

high_path = []
low_path = []
points.each_index do | index |
    point = points[index]
    current_high = point if current_high.nil?
    current_low = point if current_low.nil?
    
    next if point == current_high || point == current_low
    if point.y > last.y
        high_path << [current_high, point]
        current_high = point
    end
    if point.y < last.y
        low_path << [current_low, point]
        current_low = point
    end

    if (index + 1) % 8 == 0
        high_path << [current_high, last]
        low_path << [current_low, last]
        high_path.each do |line|
            print "[(#{line[0].x},#{line[0].y}, (#{line[1].x},#{line[1].y})] "
        end
        low_path.reverse.each do |line|
            print "[(#{line[1].x},#{line[1].y}), (#{line[0].x},#{line[0].y})] "
        end
        puts ""
        high_path = []
        low_path = []
        last = points[index + 8 ]
        current_high = nil
        current_low = nil
    end
end

